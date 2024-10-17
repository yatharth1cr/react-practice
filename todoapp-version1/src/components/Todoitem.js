export default function Todoitem() {
  let todoName = "play Basketball";
  let todoDate = "17/10/2024";
  return (
    <div class="container text-left">
      <div class="row">
        <div class="col-4">{todoName}</div>
        <div class="col-3">{todoDate}</div>
        <div class="col-3">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
