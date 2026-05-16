type Props = {
  label: string;
  placeholder?: string;
};

export function Input({ label, placeholder }: Props) {
  return (
    <div className="input">
      <label>{label}</label>
      <input placeholder={placeholder} />
    </div>
  );
}
