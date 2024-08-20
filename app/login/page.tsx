"use client"
import { Button } from '@headlessui/react'
import React, { Fragment } from 'react'
import clsx from "clsx"
import Link from 'next/link'

const Login = () => {
  return (
    <div className="border-black border-solid border-2 rounded-sm flex flex-col align-middle mx-auto w-4/5 md:w-2/5
    h-3/4 md:h:2/5">
        <form className="flex flex-col" method="post" action="/api/auth/signin/email">
            <div>
                <label htmlFor="Email">Email</label>
                <input type="email" name="Email" id="Email" />
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <input type="password" name="password" id="Password" />
            </div>
              <Button as={Fragment}>
                  {({ hover, active }) => (
                      <button
                          className={clsx(
                              'rounded py-2 px-4 text-sm text-white',
                              !hover && !active && 'bg-sky-600',
                              hover && !active && 'bg-sky-500',
                              active && 'bg-sky-700'
                          )}
                      >
                          Save changes
                      </button>
                  )}
              </Button>
        </form>
        <p> Dont have an account?</p>
        <Link href="/register">Register</Link>
    </div>
  )
}

export default Login

