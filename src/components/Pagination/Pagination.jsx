import React from "react";
import { Link } from "react-router-dom";

function Pagination() {
    return (
        <div>
            <nav aria-label="Page navigation example " className="justify-content-between d-flex align-items-center">
            <span>showing 1-10 of 100</span>
                <ul class="pagination mb-0">
               
                    <li class="page-item disabled">
                        <Link class="page-link bg-lightgray" to="#" tabindex="-1" aria-disabled="true">Previous</Link>
                    </li>
                    <li class="page-item"><Link class="page-link" to="#">1</Link></li>
                    <li class="page-item"><Link class="page-link" to="#">2</Link></li>
                    <li class="page-item"><Link class="page-link" to="#">3</Link></li>
                    <li class="page-item">
                        <Link class="page-link" to="#">Next</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Pagination;
