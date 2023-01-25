import TestBox,{ITestBoxProps} from "../components/TestBox";
import tests from "./AvailableTests.json";

export default function TestSection(){
  const availableTests:ITestBoxProps[] = tests.tests;
  const testElements = availableTests.map(
    (item, index) => <TestBox iconClasses={item.iconClasses} titleBox={item.titleBox} linkTest={item.linkTest} key={index} />);

  return (<section className="section-tests">
    <div className="section-tests__helper">
      <i className="fas fa-question-circle"></i>
    </div>
    <div className="u-center-text u-margin-bottom-medium">
      <h2 className="heading-secondary heading-secondary--dark-color">
      Testează-ți cunoștiințele !
      </h2>  
    </div>
    <div className="flex-row--centered">
      {testElements}
    </div>
  </section>);
}