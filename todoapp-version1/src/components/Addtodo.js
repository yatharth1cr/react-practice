export default function Addtodo() {
  return (
    <div class="container text-left">
      <div class="row">
        <div class="col-4">
          <input type="text" placeholder="Add todo" />
        </div>
        <div class="col-3">
          <input type="date" placeholder="Add todo" />
        </div>
        <div class="col-3">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
