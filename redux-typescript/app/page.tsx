import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import ListTodo from "./components/ListTodo";

export default function IndexPage() {
  return (
    <div>
      <ListTodo />
      {/* <Counter /> */}
    </div>
  );
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
