const DiagonalSplit = ({ 
  fillColor = "hsl(210, 17%, 96%)", 
  className = "w-full h-16" 
}: { 
  fillColor?: string; 
  className?: string; 
}) => {
  return (
    <div className={`${className} relative`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 L1200,120 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default DiagonalSplit;