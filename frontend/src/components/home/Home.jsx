import "./home.css";

const Home = () => {
  return (
    <main>
      <article className='home-banner'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel nisi ac justo
          lobortis rutrum nec sed neque. Mauris vel libero sed diam viverra vestibulum vitae at
          nisl. Duis tortor sem, blandit sit amet posuere et, fringilla eu leo. Sed nibh lorem,
          euismod sed rutrum id, tincidunt quis purus. Curabitur imperdiet.
        </p>
      </article>
      <article className='workout-container'>
        <section className='workout'>
          <section className='work-row-1'>
            <img src='.../assets/img/gym.png' alt='gym' height='450' width='600' />
          </section>
          <section className='work-row-2'>
            <h2>Workout</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel nisi ac justo
              lobortis rutrum nec sed neque. Mauris vel libero sed diam viverra vestibulum vitae at
              nisl. Duis tortor sem, blandit sit amet posuere et, fringilla eu leo. Sed nibh lorem,
              euismod sed rutrum id, tincidunt quis purus. Curabitur imperdiet, tellus non semper
              aliquam, erat est rhoncus libero, nec efficitur enim ligula et tellus. Fusce non
              ullamcorper magna. In mattis massa eget purus iaculis pulvinar. Fusce in tempus
              lectus. Donec lacus risus, luctus sed elit ac, condimentum blandit orci. Mauris
              eleifend eget orci in iaculis. Sed congue a lectus non venenatis. Duis augue tortor,
              lobortis non sapien et, varius commodo felis. Nullam at mollis lorem. Mauris vehicula
              tortor id tellus efficitur rutrum nec ac velit. Cras blandit, lorem non placerat
              pellentesque, lorem quam pulvinar nulla, non vehicula metus quam sed turpis.
            </p>
          </section>
        </section>
      </article>
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
          <img src='../assets/img/food.png' alt='food' height='450' width='600' />
        </section>
      </article>
      <article className='info'>
        <section className='info-row-1'>
          <h3>News</h3>
          <p>
            Integer sit amet auctor tortor. Etiam aliquet dolor interdum vestibulum bibendum.
            Suspendisse ut pharetra nibh. Sed maximus nunc at felis convallis, sit amet facilisis
            purus mollis.
          </p>
        </section>
        <section className='info-row-2'>
          <h3>Updates</h3>
          <p>
            Integer sit amet auctor tortor. Etiam aliquet dolor interdum vestibulum bibendum.
            Suspendisse ut pharetra nibh. Sed maximus nunc at felis convallis, sit amet facilisis
            purus mollis.
          </p>
        </section>
      </article>
    </main>
  );
};

export default Home;
