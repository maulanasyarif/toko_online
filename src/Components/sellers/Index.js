import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="columns mt-3">
          <div className="column">
            <div className="box">
              <h2 className="is-size-4 has-text-left">Order Status</h2>
              <table className="table is-bordered is-hoverable is-striped is-narrow is-fullwidth">
                <thead>
                  <tr>
                    <th> Client Name </th>
                    <th> Order No </th>
                    <th> Product Cost </th>
                    <th> Project </th>
                    <th> Payment Mode </th>
                    <th> Start Date </th>
                    <th> Payment Status </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="ps-2">Henry Klein</span>
                    </td>
                    <td> 02312 </td>
                    <td> $14,500 </td>
                    <td> Dashboard </td>
                    <td> Credit card </td>
                    <td> 04 Dec 2019 </td>
                    <td>
                      <button type="submit" className="button is-primary">
                        Approved
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="ps-2">Henry Klein</span>
                    </td>
                    <td> 02312 </td>
                    <td> $14,500 </td>
                    <td> Dashboard </td>
                    <td> Credit card </td>
                    <td> 04 Dec 2019 </td>
                    <td>
                      <button type="submit" className="button is-warning">
                        Pending
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="ps-2">Henry Klein</span>
                    </td>
                    <td> 02312 </td>
                    <td> $14,500 </td>
                    <td> Dashboard </td>
                    <td> Credit card </td>
                    <td> 04 Dec 2019 </td>
                    <td>
                      <button type="submit" className="button is-danger">
                        Rejected
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
