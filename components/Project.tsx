import {TbBrandChrome, TbBrandEdge, TbBrandFirefox, TbBrandOpera} from "react-icons/tb"

import {Features} from "./Features";

const Project = () => {

    return (
        <div>
            <Features
                preFeat={<p className="text-gray-900 dark:text-gray-300 transition-colors">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis consequatur distinctio dolorum error explicabo hic ipsum iste itaque modi nam nobis nulla numquam obcaecati officia, perferendis porro possimus quis reprehenderit similique temporibus vero voluptates. Autem fugiat illum odio ullam.</p>}
                postFeat={<p className="text-gray-900 dark:text-gray-300 transition-colors">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, minus, quae. A alias, aliquam animi at blanditiis consectetur cupiditate esse expedita fuga fugiat labore nesciunt obcaecati odio officiis quae quis quisquam quod ratione rem repudiandae sed similique veniam veritatis, voluptatem.</p>}
                title="Architektur"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa dolorem fugiat illum voluptates! Asperiores autem cumque facilis fuga laboriosam repellat sapiente sed similique totam.">
                <Features.FeatureEntry icon={<TbBrandChrome size={32}/>} title="Feature One" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut cupiditate ea eaque maxime, odio optio quisquam tenetur voluptas voluptatum! Accusantium magni odit quia vel."/>
                <Features.FeatureEntry icon={<TbBrandEdge size={32}/>} title="Feature Two" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut cupiditate ea eaque maxime, odio optio quisquam tenetur voluptas voluptatum! Accusantium magni odit quia vel."/>
                <Features.FeatureEntry icon={<TbBrandFirefox size={32}/>} title="Feature Three" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut cupiditate ea eaque maxime, odio optio quisquam tenetur voluptas voluptatum! Accusantium magni odit quia vel."/>
                <Features.FeatureEntry icon={<TbBrandOpera size={32}/>} title="Feature Four" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut cupiditate ea eaque maxime, odio optio quisquam tenetur voluptas voluptatum! Accusantium magni odit quia vel."/>
            </Features>
        </div>
    );

};

export default Project;
