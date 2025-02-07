import { ChangeEvent, useCallback, useState } from 'react';
import { HTMLInputProps } from '../shared';

type FileInputValue = File[] | null;

export function useFileInputController(inputProps: HTMLInputProps) {
  const [files, setFiles] = useState<FileInputValue>(null);

  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (inputProps.onChange) {
      inputProps.onChange(e);
    }

    if (fileList && fileList.length > 0) {
      setFiles(Array.from(fileList));
    }
  }, []);

  const clearFiles = useCallback(() => setFiles(null), []);

  const controller = {
    files,
    onChange: handleFileChange,
  };

  const tools = { clearFiles };

  return {
    files,
    tools,
    controller,
  };
}
