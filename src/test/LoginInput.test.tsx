import { render } from "@testing-library/react";
import LoadingScreen  from "../component/LoadingScreen";

// type ComponentProps = React.ComponentProps<typeof MainContent>;
// // const baseProps: ComponentProps = {
// //     onClick: () => {},
// //     id: 1
// // };
// function renderUI(props: ComponentProps) {
//   return render(<MainContent {...props} />);
// }

it("fetches a todo", () => {
  const {/* selectors */} = render(<LoadingScreen />);
  // rest of the test
});

it("handles non-existing id", () => {
  const {/* selectors */} = render(<LoadingScreen />);
  // rest of the test
});
