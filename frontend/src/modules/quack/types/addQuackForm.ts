export type AddQuackFormState = {
  isLoading: boolean;
  error?: Error;
  text: string;
  setText: (text: string) => void;
  onSubmit: (data: { text: string }) => void;
};
