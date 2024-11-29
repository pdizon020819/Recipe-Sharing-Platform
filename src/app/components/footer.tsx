import { FaMeta } from "react-icons/fa6";
import { FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-test1 py-14 w-full text-white text-center px-5 md:px-10 lg:px-20">
      <div className="text-start pb-4 mx-auto grid grid-cols-3 gap-5 md:grid-cols-5">
        <div>logo</div>
        <div>
          <a className="text-lg hover:text-test3" href="#">
            Recipes
          </a>
        </div>
        <div>
          <a className="text-lg hover:text-test3" href="#">
            Blog
          </a>
        </div>
        <div>
          <a className="text-lg hover:text-test3" href="#">
            About Us
          </a>
        </div>
        <div>
          <a className="text-lg hover:text-test3" href="#">
            Contact Us
          </a>
        </div>
        {/* |   Recipes   |   Blog   |   About Us   |   Contact Us   */}
      </div>

      <div className="text-start py-4 border-dashed border-test4 border-b-2">
        <div className="">
          <p className="inline-block">Sign Up for Weekly Recipes:</p>
          <div className="text-nowrap md:inline-block">
            <input className="round-md p-2 text-black md:ml-3" type="text" />
            <button className="bg-test4 mx-1 text-black py-2 px-4 hover:bg-test3">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex pt-4 items-center">
          <p className="inline-block">Follow Us:</p>
          <a
            className="inline-block text-3xl px-4 py-2 hover:text-test5"
            href="#"
          >
            <FaTwitter />
          </a>
          <a
            className="inline-block text-3xl px-4 py-2 hover:text-test5"
            href="#"
          >
            <FaMeta />
          </a>
          <a
            className="inline-block text-3xl px-4 py-2 hover:text-test5"
            href="#"
          >
            <FaInstagram />
          </a>
          <a
            className="inline-block text-3xl px-4 py-2 hover:text-test5"
            href="#"
          >
            <FaYoutube />
          </a>
          <a
            className="inline-block text-3xl px-4 py-2 hover:text-test5"
            href="#"
          >
            <FaTiktok />
          </a>
        </div>
      </div>

      <div className="text-start">
        <div className="py-4">
          <p>Making Cooking Easy & Fun for Everyone!</p>
        </div>
        <div className="grid grid-cols-2 gap-5 pt-4 md:grid-cols-4">
          {/* © 2024 RecipeSite. All rights reserved. | Privacy Policy | Terms of Service */}
          <p className="col-span-2">© 2024 RecipeSite. All rights reserved.</p>
          <div>
            <a className="hover:text-test3" href="#">
              Privacy Policy
            </a>
          </div>
          <div>
            <a className="hover:text-test3" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
