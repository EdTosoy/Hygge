import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "src/store.ts";
import { decrement, increment } from "./slice.ts";

export function HomePage() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="bg-white">
      <div className="col-start-2 col-end-3 p-6 ">
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
