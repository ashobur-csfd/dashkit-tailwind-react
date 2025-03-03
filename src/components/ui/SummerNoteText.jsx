import { useEffect } from 'react';

export default function SummerNoteText() {

  // useEffect(() => {
  //   // Initialize Summernote after the component is mounted
  //   const customTextArea = document.querySelectorAll(".summernote");
  //   customTextArea.forEach((textarea) => {
  //     $(textarea).summernote({
  //       placeholder: "Write your description here...",
  //       tabsize: 2,
  //       height: 200,
  //       toolbar: [
  //         ["style", ["style"]],
  //         ["font", ["bold", "underline", "clear"]],
  //         ["fontname", ["fontname"]],
  //         ["color", ["color"]],
  //         ["para", ["ul", "ol", "paragraph"]],
  //         ["height", ["height"]],
  //         ["table", ["table"]],
  //         ["insert", ["link", "picture", "video"]],
  //         ["view", ["fullscreen", "codeview", "help"]],
  //       ],
  //     });
  //   });

  //   // Cleanup function to destroy Summernote when the component unmounts
  //   return () => {
  //     customTextArea.forEach((textarea) => {
  //       $(textarea).summernote('destroy');
  //     });
  //   };
  // }, []);

  return (
    <textarea className="summernote"></textarea>
  );
}
