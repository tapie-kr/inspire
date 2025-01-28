import { DraggableFileInput } from './categories/draggable-file';
import { FileInput } from './categories/file';
import { ImagePreviewInput } from './categories/image-preview';
import { ParagraphInput } from './categories/paragraph';
import { TextInput } from './categories/text';

export const Input = {
  Text: TextInput,
  Paragraph: ParagraphInput,
  File: FileInput,
  DraggableFile: DraggableFileInput,
  ImagePreview: ImagePreviewInput,
};
