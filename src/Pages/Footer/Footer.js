import React from 'react';
import {
  MDBFooter,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='bg-light text-center text-white'>
      <div className='container p-4 pb-0'>
        <section className='mb-4'>
          <a
            className='btn btn-primary btn-floating m-1'
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: '#55acee' }}
            href='https://twitter.com/shufol_islam?t=mwwyXhQ-YYB0EVrBXo0GDQ&s=09'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: '#dd4b39' }}
            href='https://google.com/shufolislam1255@gmail.com'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/in/shufol-islam-441b0922b'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/shufolislam1'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright: Shufol Islam . Find me In social media.
      </div>
    </MDBFooter>
  );
}