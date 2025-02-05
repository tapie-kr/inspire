import MagicString from 'magic-string';

/**
 * @returns {import('rollup').Plugin}
 */
function preserveDirectives() {
  /**
   * @type {Map<string, Set<string>>}
   */
  const directives = new Map;

  return {
    name: 'preserve-directives',
    transform(code, id) {
      let isCodeModified = false;

      const source = new MagicString(code);

      const ast = this.parse(code, {
        allowReturnOutsideFunction: true,
        allowShebang:               true,
      });

      for (const node of ast.body) {
        if (node.type === 'ExpressionStatement' && node.expression.type === 'Literal') {
          const directive = node.expression.value.toString();
          const value = node.expression.raw;

          if (!value) {
            continue;
          }

          const set = directives.get(directive) || new Set;

          set.add(value);

          directives.set(id, set);

          source.remove(node.start, node.end);

          isCodeModified = true;
        }
      }

      if (!isCodeModified) {
        return null;
      }

      return {
        code: source.toString(),
        map:  null,
      };
    },
    renderChunk(code, chunk, _options) {
      const targetDirectives = chunk.moduleIds
        .map(moduleId => Array.from(directives.get(moduleId) || []))
        .filter(Boolean)
        .flat()
        .map(value => `${value};`.replaceAll('"', "'"));

      if (targetDirectives.length === 0) {
        return null;
      }

      const source = new MagicString(code);

      source.prepend(targetDirectives.join('\n') + '\n');

      return {
        code: source.toString(),
        map:  null,
      };
    },
  };
}

export default preserveDirectives;
