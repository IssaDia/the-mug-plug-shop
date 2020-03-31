import React, { useEffect, useState } from "react";
import $ from "jquery";
import Login from "./Login";
import SignUp from "./SignUp";

{
  /* Form with login and sign up in the same form (not used in this application for now*/
}

const FormAuth = () => {
  {
    /* state to switch to sign up form on click*/
  }

  const [login, setLogin] = useState("signUp");

  {
    /*hook with jQuery switching classes to animate form*/
  }

  useEffect(() => {
    $(".form")
      .find("input, textarea")
      .on("keyup blur focus", function(e) {
        var $this = $(this),
          label = $this.prev("label");

        if (e.type === "keyup") {
          if ($this.val() === "") {
            label.removeClass("active highlight");
          } else {
            label.addClass("active highlight");
          }
        } else if (e.type === "blur") {
          if ($this.val() === "") {
            label.removeClass("active highlight");
          } else {
            label.removeClass("highlight");
          }
        } else if (e.type === "focus") {
          if ($this.val() === "") {
            label.removeClass("highlight");
          } else if ($this.val() !== "") {
            label.addClass("highlight");
          }
        }
      });

    $(".tab a").on("click", function(e) {
      e.preventDefault();

      $(this)
        .parent()
        .addClass("active");
      $(this)
        .parent()
        .siblings()
        .removeClass("active");

      const target = $(this).attr("href");

      $(".tab-content > div")
        .not(target)
        .hide();

      $(target).fadeIn(600);
    });
  }, []);

  {
    /*function to switch form type on click*/
  }

  const handleClick = formType => {
    setLogin(formType);
  };

  return (
    <div className="form">
      <ul className="tab-group">
        <li className="tab active">
          <a onClick={() => handleClick("signUp")}>Sign Up</a>
        </li>
        <li className="tab">
          <a onClick={() => handleClick("login")}>Log In</a>
        </li>
      </ul>

      <div className="tab-content">
        {login == "signUp" ? <SignUp></SignUp> : <Login></Login>}
      </div>
    </div>
  );
};

export default FormAuth;
