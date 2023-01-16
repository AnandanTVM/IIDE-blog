import React from 'react';
import './Upload.css';
function Upload() {
  return (
    <div className="mainupload">
      <div class="container">
        <h2>Post</h2>

        <form>
          <label>Subjet</label>
          <div class="group">
            <input type="text" />
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>
          <label>Description</label>
          <div class="group">
            <textarea type="text"></textarea>
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>

        <p class="footer"></p>
      </div>
    </div>
  );
}

export default Upload;
