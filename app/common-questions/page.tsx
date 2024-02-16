"use client"
import Bulb from 'components/open-part/bulb';
import commonQuestions from 'public/datas/common-questions.json'
import Circles from 'components/open-part/circles';
import { Accordion } from '@mantine/core';

const CommonQuestions = () => {

  return (
    <div className='bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <Accordion w={{ base: "100%", md: "80%" }}>
          {
            commonQuestions.map(el => (
              <Accordion.Item value={el.question}>
                <Accordion.Control py={12}>
                  <h1 className='text-white text-xl'>{el.question}</h1>
                </Accordion.Control>
                <Accordion.Panel>
                  <h1 className='text-gray-300'>{el.answer}</h1>
                </Accordion.Panel>
              </Accordion.Item>
            ))
          }
        </Accordion>
      </div>
      <Bulb />
    </div>
  )
};

export default CommonQuestions;
