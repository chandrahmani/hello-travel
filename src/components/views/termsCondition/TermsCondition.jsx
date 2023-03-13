import { Container } from '../../core/styled';
import './TermsCondition.css';

const TermsCondition = () => {
  return (
    <section className="term-wrap">
      <Container>
        <div className="term-container">
          <h1>Terms & Condition</h1>
          <div>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Quisque vitae neque diam. Nullam maximus fringilla erat, sit amet commodo
              tortor. Cras pretium orci vel ipsum dapibus, nec scelerisque nisl malesuada. Cras
              condimentum vel tortor vel eleifend. Duis efficitur diam quis lorem varius porttitor.
              Nam ex purus, pulvinar a blandit a, lacinia et lectus. Curabitur in nisi aliquam
              turpis rhoncus lacinia mollis vitae enim.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TermsCondition;
