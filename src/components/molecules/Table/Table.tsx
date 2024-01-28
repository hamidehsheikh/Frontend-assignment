import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Popover from "../../atoms/Popover";
import classes from "./Table.module.scss";
import { TableProps } from "./Table.types";
import { StopIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
const Table = (props: TableProps) => {
  const { data = [], sectionId = 0 } = props;

  interface IconComponentProps {
    svgData: string;
  }

  const IconComponent: React.FC<IconComponentProps> = ({ svgData }) => {
    return <div dangerouslySetInnerHTML={{ __html: svgData }} />;
  };

  return (
    <div className={classes.tableContainer}>
      <table className={classes.table}>
        {data.map((item, index) => {
          return (
            <>
              {item.title && (
                <thead key={index}>
                  <tr>
                    <th>{item.title}</th>
                    <th></th>
                  </tr>
                </thead>
              )}
              <tbody className={sectionId === 0 ? classes.stripped : ""}>
                {item.items.map((rowItem, rowIndex) => (
                  <tr key={rowIndex}>
                    {rowItem.map((colItem, colIndex) => {
                      return (
                        <td key={colIndex}>
                          <div
                            className={`flex flex-row gap-1 align-middle ${
                              colItem.is_bold ? "font-bold" : ""
                            }`}
                          >
                            {colItem.icon && colItem.icon !== "" && (
                              <IconComponent svgData={colItem.icon} />
                            )}
                            {colItem.title}
                            {colItem.description && (
                              <Popover
                                content={<div>{colItem.description}</div>}
                              >
                                <ExclamationCircleIcon className="h-4 w-4 text-cc-dark-blue" />
                              </Popover>
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};
export default Table;
