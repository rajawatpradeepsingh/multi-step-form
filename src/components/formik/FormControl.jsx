import NameInput from "../inputs/NameInput";
import DescriptionInput from "../inputs/DescriptionInput";
import RepositoryUrlInput from "../inputs/RepositoryUrlInput";
import BranchInput from "../inputs/BranchInput";
import BuildCommandInput from "../inputs/BuildCommandInput";
import EnvironmentVariableInput from "../inputs/EnvironmentVariableInput";

export default function FormControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "name":
      return <NameInput {...rest} />;
    case "description":
      return <DescriptionInput {...rest} />;
    case "repourl":
      return <RepositoryUrlInput {...rest} />;
    case "branch":
      return <BranchInput {...rest} />;
    case "buildcommands":
      return <BuildCommandInput {...rest} />;
    case "environmentvariables":
      return <EnvironmentVariableInput {...rest} />;
    default:
      return null;
  }
}
