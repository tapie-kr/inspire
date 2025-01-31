import { type ChangeEvent, useCallback, useState } from 'react';

type FileInputValue = File[] | null;

export function useFileInputController() {
  const [files, setFiles] = useState<FileInputValue>(null);

  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

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
