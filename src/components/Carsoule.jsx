import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel
      controls={false}
      fade={true}
      indicators={false}
      interval={1500}
      pause={false}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={"600rem"}
          src="https://www.91-cdn.com/hub/wp-content/uploads/2022/11/Untitled1.jpg"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={"600rem"}
          src="https://i.ytimg.com/vi/RtvLVDokXpU/maxresdefault.jpg"
          alt="Second slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={"600rem"}
          src="https://www.thenews.com.pk/assets/uploads/updates/2023-02-05/1037693_6986439_pathan1_updates.jpg"
          alt="Third slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={"600rem"}
          src="https://i.ytimg.com/vi/qN3wfuPYTI4/maxresdefault.jpg"
          alt="Third slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
