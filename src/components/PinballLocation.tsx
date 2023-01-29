import { useEffect, useState } from "react";

interface PinballLocationProps {
  location: any;
  i: any;
}

const PinballLocation = ({ location, i }: PinballLocationProps) => {
  const [name, setName] = useState(null);
  useEffect(() => {
    if (location.name) {
      setName(location.name);
    }
  }, [location]);

  return <li style={{ textAlign: "left" }}>{name}</li>;
};

export default PinballLocation;
