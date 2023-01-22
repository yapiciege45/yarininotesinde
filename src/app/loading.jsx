"use client";
import React from 'react'

const Loading = () => {
  return (
    <div class="flex justify-center items-center min-h-screen text-orange-500">
        <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
  )
}

export default Loading