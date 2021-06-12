interface RadioBoxProps {
  onClick: () => void;
  isActive: boolean;
  isActiveStyle: string;
  children: React.ReactNode
}

export function RadioBox({
  onClick,
  isActive,
  isActiveStyle,
  children
}: RadioBoxProps) {

  return (
    <button
      className={`${
        isActive === true && isActiveStyle
      } " h-16 border border-gray-300 rounded bg-transparent flex items-center justify-center hover:border-gray-400 "`}
      onClick={onClick}
      type="button"
    >
        {children}
    </button>
  );
}
