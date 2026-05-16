type Props = {
  label: string;
};

export function Checkbox({ label }: Props) {
  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" /> {label}
      </label>
    </div>
  );
}
