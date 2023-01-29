import PinballLocation from "./PinballLocation";

interface PinballContainerViewProps {
  locationDataRaw: [];
}

const PinballContainerView = ({
  locationDataRaw,
}: PinballContainerViewProps) => {
  return (
    <div>
      <h2>Closest Pinball Locations:</h2>
      <ol>
        {locationDataRaw.map((location, i) => {
          return <PinballLocation key={i} location={location} i={i} />;
        })}
      </ol>
    </div>
  );
};

export default PinballContainerView;
