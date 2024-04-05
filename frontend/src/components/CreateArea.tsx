import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSetRecoilState } from "recoil";
import { ContentAtom, TitleAtom } from "../../atoms/InputAtoms";

export const CreateArea = () => {
    const setTitle = useSetRecoilState(TitleAtom);
    const setContent = useSetRecoilState(ContentAtom);

    return (
        <div className="container mx-auto p-8">
            <input
                type="text"
                className="w-full h-16 px-4 mb-8 text-4xl font-semibold placeholder-gray-500 border-b-2 focus:outline-none focus:border-blue-600 rounded-t-lg"
                onChange={(e) => setTitle(e.target.value.trim())}
                placeholder="Title"
            />
            <div className="w-full border border-gray-200 rounded-lg">
                <ReactQuill 
                    onChange={setContent} 
                    className="h-96 bg-white border-none rounded-lg placeholder-gray-500"
                />
            </div>
        </div>
    );
};
