import food from "./assets/img/food.png";

const Food = () => {
  return (
    <article className='food'>
      <section className='food-row-1'>
        <h2>Food</h2>
        <p>
          Nam vel purus vitae lorem elementum convallis. Morbi a aliquet turpis, pretium commodo
          odio. Aliquam cursus porta pharetra. Integer cursus ultrices risus sed hendrerit. Aenean
          sed pretium nisi. Praesent luctus lacus elit, ac pulvinar augue gravida sed. Morbi nibh
          lorem, facilisis in dignissim in, ullamcorper ac est. Aenean viverra vel eros ut
          porttitor. Quisque facilisis, libero id pretium dictum, sapien odio commodo lorem, in
          ullamcorper nisl sapien eget sem. Integer sit amet auctor tortor. Etiam aliquet dolor
          interdum vestibulum bibendum. Suspendisse ut pharetra nibh. Sed maximus nunc at felis
          convallis, sit amet facilisis purus.
        </p>
      </section>
      <section className='food-row-2'>
        <img src={food} alt='food' height='450' width='600' />
      </section>
    </article>
  );
};

export default Food;
