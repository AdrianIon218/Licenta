import TestBox,{ITestBoxProps} from "../components/TestBox";
import tests from "./AvailableTests.json";

export default function TestSection(){
  const availableTests:ITestBoxProps[] = tests.tests;
  const testElements = availableTests.map(
    (item, index) => <TestBox iconClasses={item.iconClasses} titleBox={item.titleBox} linkTest={item.linkTest} key={index} />);

  return (<section className="section-tests">
    <div className="section-tests__helper">
      <i className="fas fa-question-circle"> Ajutor</i>
    </div>
    <div className="flex-row--centered">
      {testElements}
    </div>
  </section>);
}