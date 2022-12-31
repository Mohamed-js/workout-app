class ReactorGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('templates', __dir__)

  def create_react_index_file
    data =  args.map do |arg|
                field = arg.split(":")[0]
                type = arg.split(":")[1]
                
                "<p>{#{plural_name.singularize}.#{field}}</p>"
              end
    # CREATE INDEX PAGE
    create_file "app/javascript/components/#{plural_name.capitalize}/#{plural_name.capitalize}.jsx", <<-FILE
import React, { useEffect, useState } from "react";
const #{plural_name.capitalize} = () => {
  const [#{plural_name}, set#{plural_name.capitalize}] = useState();

  useEffect(() => {
    fetch("/#{plural_name}").then((data) => set#{plural_name.capitalize}(JSON.parse(data)));
  }, []);
  return (
    <>
      <h1>#{plural_name.capitalize}</h1>
      {#{plural_name} && (
        <div>
          {#{plural_name}.map((#{plural_name.singularize}) => {
            return (
              <div style={{ display: "flex" }}>
                #{args.map do |arg| "<p>{#{plural_name.singularize}.#{arg.split(":")[0]}}</p>\n                " end.join('')}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default #{plural_name.capitalize};
    FILE
  end
  

  def create_react_new_file
    fields =  args.map do |arg|
                field = arg.split(":")[0]
                type = arg.split(":")[1]
                
                "<label for='#{field}'>#{field.capitalize}</label>\n        <input  name='#{field}' placeholder='#{field.capitalize}' type='text' onChange={(e) => handleChange(e)} />\n        "
              end
    

   
  # CREATE NEW PAGE
  create_file "app/javascript/components/#{plural_name.capitalize}/New#{class_name}.jsx", <<-FILE
import React, { useState } from "react";

const New#{class_name} = () => {
  const [#{plural_name.singularize}, set#{class_name}] = useState({});

  return (
    <>
      <h1>New #{class_name}</h1>
      <form onSubmit={handleSubmit}>
        #{fields.join('')}
      </form>
    </>
  );

  function handleChange(e) {
    set#{class_name}({
      product: {
        ...#{plural_name.singularize}.#{plural_name.singularize},
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleSubmit(e) {
    e.target.preventDefault();
    fetch("/#{plural_name}/create", {
      method: "POST",
      body: JSON.stringify(#{plural_name.singularize}),
    });
  }
};

export default New#{class_name};
    FILE
  end
  
end
