import { Button } from "../Button";

import { Title } from "./Title";
import { Label } from "./Label";
import { Input } from "./Input";
import { Select } from "./Select";

function Form({ onSubmit, children, classes }) {
  return (
    <form
      onSubmit={onSubmit}
      className={`flex w-[500px] flex-col rounded-md p-5 ${classes}`}
    >
      {children}
    </form>
  );
}

Form.Title = Title;
Form.Label = Label;
Form.Input = Input;
Form.Select = Select;
Form.Submit = Button;

export { Form };
