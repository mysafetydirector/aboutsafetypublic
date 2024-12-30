'use client'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './style.module.css'
import { Formik } from 'formik'

const fields = {
  name: { label: 'Name*', type: 'text' },
  email: { label: 'Email*', type: 'email' },
  company: { label: 'Company', type: 'text' },
  phone: { label: 'Phone Number*', type: 'tel' },
  description: {
    label: 'Brief description of your project/needs*',
    type: 'textarea',
  },
}

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formSubmitError, setFormSubmitError] = useState(null)

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }
      setSubmitted(true)
    } catch (error) {
      setFormSubmitError(error.message)
    }
  }

  const validate = (values) => {
    const errors = {}
    Object.entries(fields).forEach(([key, { label }]) => {
      if (!values[key] && key !== 'company') {
        errors[key] = `${label} is required`
      }
    })
    return errors
  }

  return (
    <div className={styles.contactFormContainer}>
      <p className={styles.instructions}>
        Interested in working with Ed? Please fill out this short contact form
        or send an email to
        <a href="mailto:mysafetydirector@gmail.com">
          {' '}
          mysafetydirector@gmail.com
        </a>
      </p>
      <Formik
        initialValues={Object.keys(fields).reduce(
          (acc, key) => ({ ...acc, [key]: '' }),
          {}
        )}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            {Object.entries(fields).map(([name, { label, type }]) => (
              <div key={name} className={styles.field}>
                <label htmlFor={name} className={styles.label}>
                  {label}
                </label>
                {type === 'textarea' ? (
                  <textarea
                    id={name}
                    name={name}
                    className={styles.input}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[name]}
                  />
                ) : (
                  <input
                    type={type}
                    id={name}
                    name={name}
                    className={styles.input}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[name]}
                  />
                )}
                {touched[name] && errors[name] && (
                  <div className={styles.error}>{errors[name]}</div>
                )}
              </div>
            ))}
            {formSubmitError && (
              <div className={styles.error}>Error: {formSubmitError}</div>
            )}
            <button
              type="submit"
              className={styles.submit}
              disabled={submitted}
            >
              {submitted ? 'Submitted. Thanks!' : 'Submit'}
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

const Component = () => (
  <>
    <Head>
      <title>About Safety</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <h1>About Safety Training</h1>
      <Image
        src="/headshot.jpg"
        alt="Ed Light II"
        width={150}
        height={150}
        className={styles.headshot}
      />
      <p>
        Learn industry best-practices employed at Fortune 500 global
        corporations from a 30-year Health, Safety, Environmental (HSE) Veteran.
      </p>
      <ContactForm />
    </main>
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} About Safety LLC
    </footer>
  </>
)

export default Component
