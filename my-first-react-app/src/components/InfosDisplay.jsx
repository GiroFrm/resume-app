

export function InfosDisplay({ info, excludeKeys = [] }) {
  return (
    <div>
      {" "}
      {Object.entries(info).map(
        ([key, value]) => !excludeKeys.includes(key) && <p key={key}>{value}</p>
      )}{" "}
    </div>
  );
}