import React from "react";

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y
  ].join(" ");

  return d;
}

export function mapNumber(
  number: number | any,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

const SvgCircle = ({ radius }: { radius: number }) => {
  return (
    <svg className="countdown-svg">
      <path
        fill="none"
        stroke="#333"
        strokeWidth="4"
        d={describeArc(50, 50, 48, 0, radius)}
      />
    </svg>
  );
};

export default SvgCircle;
