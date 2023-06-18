import React from 'react'
import "./DescPanel.scss";

function DescPanel() {
  return (
    <div className="descpanel">
      <p className='desc-header'>
        <span>Description</span>
        <i class="fa-sharp fa-solid fa-chevron-up"></i>
      </p>

      <p className="desc-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eligendi corrupti quae eum, laborum aliquam odit non unde molestiae deserunt maiores fuga cumque. Et aperiam consequatur commodi repudiandae inventore illo ut minima non, excepturi perferendis sunt maiores fugiat vitae officiis eum itaque neque esse, aliquid quis soluta qui enim assumenda! </p>
    </div>
  )
}

export default DescPanel