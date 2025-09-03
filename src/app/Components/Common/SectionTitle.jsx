import parse from 'html-react-parser';
import Image from 'next/image';

const SectionTitle = ({Title,SubTitle}) => {
  
    return (
        <div>
           <h3 className="cs_section_subtitle cs_accent_color text-uppercase cs_medium cs_fs_20 cs_mb_10 wow fadeInUp" data-wow-duration="0.9s" data-wow-delay="0.25s">
           <Image src="/assets/img/icons/fan.svg" alt="img" className="cs_section_subheading_icon" width={15} height={15}   />
            {parse(SubTitle)}
          </h3>
          <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0">{parse(Title)}</h2>           
        </div>
        
    );
};

export default SectionTitle;