import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";

function SizeTable() {
  return (
    <div className='bg-white w-4/6 m-auto border rounded-2xl p-4'>
        <div className='flex items-center justify-between'>
            <h3 className='text-xl font-bold text-gray-500 text-center mb-4'>Sizing Guide</h3>
            <span className='flex items-center py-2 px-4 bg-purple-500 rounded-tl-2xl rounded-br-2xl text-white fpmt-bold'><span className='mr-4'>Close</span><IoMdCloseCircle /></span>
        </div>
        <table className='w-full text-center text-sm text-gray-400'>
            <tr className='border-b-2'>
                <th className='text-gray-500 py-4'>DEVICE</th>
                <th className='text-gray-500'>WHITE</th>
                <th className='text-gray-500'>BLACK</th>
                <th className='text-gray-500'>RED</th>
                <th className='text-gray-500'>GREEN</th>
            </tr>
            <tr className='border-b-2'>
                <td className='text-gray-500 py-2'>Chair</td>
                <td>14-14.5</td>
                <td>15-15.5</td>
                <td>16-16.5</td>
                <td>17-17.5</td>
            </tr>
            <tr className='border-b-2'>
                <td className='text-gray-500 py-2'>Moniter</td>
                <td>14-14.5</td>
                <td>15-15.5</td>
                <td>16-16.5</td>
                <td>17-17.5</td>
            </tr>
            <tr className='border-b-2'>
                <td className='text-gray-500 py-2'>Keycaps</td>
                <td>14-14.5</td>
                <td>15-15.5</td>
                <td>16-16.5</td>
                <td>17-17.5</td>
            </tr>
            <tr className='border-b-2'>
                <td className='text-gray-500 py-2'>CPU</td>
                <td>14-14.5</td>
                <td>15-15.5</td>
                <td>16-16.5</td>
                <td>17-17.5</td>
            </tr>
            <tr className='border-b-2'>
                <td className='text-gray-500 py-2'>Mouse</td>
                <td>14-14.5</td>
                <td>15-15.5</td>
                <td>16-16.5</td>
                <td>17-17.5</td>
            </tr>
        </table>
    </div>
  )
}

export default SizeTable