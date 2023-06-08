import gym from "../../assets/img/gym.png";

const Workout = () => {
  return (
    <article className='workout-container'>
      <section className='workout'>
        <section className='work-row-1'>
          <img src={gym} alt='gym' height='450' width='600' />
        </section>
        <section className='work-row-2'>
          <h2>Workout</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel nisi ac justo
            lobortis rutrum nec sed neque. Mauris vel libero sed diam viverra vestibulum vitae at
            nisl. Duis tortor sem, blandit sit amet posuere et, fringilla eu leo. Sed nibh lorem,
            euismod sed rutrum id, tincidunt quis purus. Curabitur imperdiet, tellus non semper
            aliquam, erat est rhoncus libero, nec efficitur enim ligula et tellus. Fusce non
            ullamcorper magna. In mattis massa eget purus iaculis pulvinar. Fusce in tempus lectus.
            Donec lacus risus, luctus sed elit ac, condimentum blandit orci. Mauris eleifend eget
            orci in iaculis. Sed congue a lectus non venenatis. Duis augue tortor, lobortis non
            sapien et, varius commodo felis. Nullam at mollis lorem. Mauris vehicula tortor id
            tellus efficitur rutrum nec ac velit. Cras blandit, lorem non placerat pellentesque,
            lorem quam pulvinar nulla, non vehicula metus quam sed turpis.
          </p>
        </section>
      </section>
    </article>
  );
};

export default Workout;
