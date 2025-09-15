const CurvedWave = ({ 
  fillColor = "hsl(211, 100%, 20%)", 
  className = "w-full h-20" 
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
          d="M0,0 C150,120 350,120 600,60 C850,0 1050,0 1200,60 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default CurvedWave;