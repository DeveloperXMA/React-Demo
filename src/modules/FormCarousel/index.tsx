import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faEnvelope, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import Bio from './Bio';
import Details from './Details';
import Submit from './Submit';
import { OutterWrapper } from './OutterWrapper';
import { FormCarousel } from './Form';

const MyForm: React.FC = () => {

  return (
    <OutterWrapper>
      <div>
        <h1>Form Carousel Demo</h1>
        <h4>
          Fill out your details below to complete the form.
        </h4>

        <FormCarousel
          stages={[
            {
              form: Details,
              icon: <FontAwesomeIcon icon={faCopy} />,
              label: "Your Details"
            },
            {
              form: Bio,
              icon: <FontAwesomeIcon icon={faPenAlt} />,
              label: "Bio"
            },
            {
              form: Submit,
              icon: <FontAwesomeIcon icon={faEnvelope} />,
              label: "Submit"
            }
          ]}
        />
      </div>
    </OutterWrapper>
  );
}

export default MyForm;