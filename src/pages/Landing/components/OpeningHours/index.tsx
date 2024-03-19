export interface OpeningHoursProps {
  title?: string;
  description?: string;
  list?: any[];
}

export const OpeningHours = (props: OpeningHoursProps) => {
  const { title, description, list } = props;

  const _renderHeader = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: "1%" }}>
        <p style={{ color: "#fff", fontSize: "25px", fontWeight: "bold" }}>
          {title}
        </p>
      </div>
    );
  };

  const _renderDescription = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: "1%" }}>
        <p style={{ color: "#fff", fontSize: "14px", textAlign: "justify" }}>
          {description}
        </p>
      </div>
    );
  };

  const _renderList = () => {
    let compProps: any = [];
    list?.forEach((item?: any) => {
      compProps.push(
        <div style={{ margin: "0% 3% 2% 3%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0%",
              margin: "0%",
            }}
          >
            <p style={{ color: "#fff" }}>{item?.title}</p>
            <p style={{ color: "#fff" }}>{item?.time}</p>
          </div>
          <div style={{ color: "gray", border: "1px solid", padding: "0%" }} />
        </div>
      );
    });

    return <div>{compProps}</div>;
  };
  return (
    <div style={{ backgroundColor: "#000", margin: "2%", padding: "2%" }}>
      {_renderHeader()}
      {_renderDescription()}
      {_renderList()}
    </div>
  );
};

OpeningHours.defaultProps = {
  title: "Opening Hours",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, inventore hic nulla, provident laudantium voluptate ipsa eligendi commodi mollitia vero animi, repudiandae quidem minima est sint sapiente quas iure deleniti.",
  list: [],
};
export default OpeningHours;
