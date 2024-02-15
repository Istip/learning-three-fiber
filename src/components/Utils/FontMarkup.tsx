const FontMarkup = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          We are ready to make the world thumble 1
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit</b>. Sed ut
          perspiciatis unde omnis iste natus <i>error sit voluptatem</i>{" "}
          accusantium doloremque laudantium.
        </p>
        <strong>Strong Text</strong>
        <a href="#">Anchor Text</a>
        <sub>Subscript Text</sub>
        <article>
          <h1>Article We are ready to make the world thumble 1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus <i>error sit voluptatem</i>{" "}
            accusantium doloremque laudantium.
          </p>
        </article>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          We are ready to make the world thumble 2
        </h2>
        <p className="text-base">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <strong>Strong Text</strong>
        <a href="#">Anchor Text</a>
        <sup>Subscript Text</sup>
        <article>
          <h2>Article We are ready to make the world thumble 2</h2>
          <p>
            <b>Consectetur adipiscing elit</b>, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </article>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold">
          We are ready to make the world thumble 3
        </h3>
        <p className="text-sm">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <strong>Strong Text</strong>
        <a href="#">Anchor Text</a>
        <sub>Subscript Text</sub>
        <article>
          <h3>Article We are ready to make the world thumble 3</h3>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>
      </div>
      <div className="text-center">
        <h4 className="text-xl font-bold">
          We are ready to make the world thumble 4
        </h4>
        <p className="text-xs">Ut labore et dolore magna aliqua.</p>
        <strong>Strong Text</strong>
        <a href="#">Anchor Text</a>
        <sub>Subscript Text</sub>
        <article>
          <h4>Article We are ready to make the world thumble 4</h4>
          <p>Ut labore et dolore magna aliqua.</p>
        </article>
      </div>
    </div>
  );
};

export default FontMarkup;
