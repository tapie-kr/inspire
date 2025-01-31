import { type ChangeEvent, type DragEvent, useCallback, useState } from 'react';

type FileInputValue = File[] | null;

export function useDraggableFileInputController() {
  const [files, setFiles] = useState<FileInputValue>(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList && fileList.length > 0 && !fileList[0].webkitRelativePath) {
      setFiles(Array.from(fileList));
    }
  }, []);

  const removeFile = useCallback((index: number) => {
    setFiles(prev => {
      if (!prev) return null;

      const newFiles = [...prev];

      newFiles.splice(index, 1);

      return newFiles.length > 0 ? newFiles : null;
    });
  }, []);

  const handleDragEnter = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    e.stopPropagation();

    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    e.stopPropagation();

    setIsDragging(false);

    if (e.dataTransfer.items) {
      const items = Array.from(e.dataTransfer.items);

      const filesOnly = items.reduce<File[]>((acc, item) => {
        const entry = item.webkitGetAsEntry();

        if (item.kind === 'file' && !entry?.isDirectory) {
          const file = item.getAsFile();

          if (file) acc.push(file);
        }

        return acc;
      }, []);

      if (filesOnly.length > 0) {
        setFiles(filesOnly);
      }
    }
  }, []);

  const clearFiles = useCallback(() => setFiles(null), []);

  const controller = {
    files,
    onChange:    handleFileChange,
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDragOver:  handleDragOver,
    onDrop:      handleDrop,
  };

  const tools = {
    clearFiles,
    removeFile,
  };

  return {
    files,
    isDragging,
    tools,
    controller,
  };
}
