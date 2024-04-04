import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSetRecoilState } from "recoil";
import { ContentAtom, TitleAtom } from "../../atoms/InputAtoms";

export const CreateArea = () => {
    
    const setTitle = useSetRecoilState(TitleAtom);
    const setContent = useSetRecoilState(ContentAtom);

    return (
        <div className="p-4">
            <div className="flex justify-center text-6xl border-transparent focus:border-transparent focus:rin</div>g-0">
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value.trim())}
                    placeholder="Title"
                />
            </div>
            <div className="flex justify-center">
                <ReactQuill onChange={setContent} className="my-4" />
            </div>
        </div>
    );
};
