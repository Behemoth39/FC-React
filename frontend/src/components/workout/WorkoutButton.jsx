import "./workout.css";

const WorkoutButton = () => {
  return (
    <div className='buttons'>
      <button>Add exercise</button>
      <button>Logs</button>
    </div>
  );
};

export default WorkoutButton;

/* Should the if statement be here or in WorkoutList?
if (window.innerWidth < 950) {
      const buttons = document.querySelector(".container");
      buttons.insertAdjacentHTML(
        "beforebegin",
        ` <div class="buttons">
          <button>Add exercise</button>
          <button>Logs</button>
        </div>`
      );
    } else {
      const buttons = document.querySelector(".container");
      buttons.insertAdjacentHTML(
        "afterend",
        ` <div class="buttons">
            <button>Add exercise</button>
            <button>Logs</button>
          </div>`
      );
    }
*/
