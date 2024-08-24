import parse from 'html-react-parser';

interface Props {
    content: string;
}

const UnitContent = ({ content }: Props) => {
    return parse(content || '');
};

export default UnitContent;
