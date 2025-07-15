export default plop => {
    plop.setGenerator('domain', {
        description: 'Atomic 기반 도메인 생성기',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: '도메인 이름은?',
            }
        ],
        actions: [
            {
                type: 'addMany',
                destination: 'src/domains/{{dashCase name}}',
                base: 'plop-templates/domain',
                templateFiles: 'plop-templates/domain/**',
            },
            ...[
                'atoms', 'molecules', 'organisms', 'templates'
            ].map(level => ({
                type: 'add',
                path: 'src/domains/{{dashCase name}}/components/' + level + '/.gitkeep',
                template: '',
            })),
            {
                type: 'add',
                path: 'src/domains/{{dashCase name}}/assets/.gitkeep',
                template: '',
            },
            {
                type: 'add',
                path: 'src/domains/{{dashCase name}}/hooks/.gitkeep',
                template: '',
            },
            {
                type: 'add',
                path: 'src/domains/{{dashCase name}}/pages/.gitkeep',
                template: '',
            },
            {
                type: 'add',
                path: 'src/domains/{{dashCase name}}/types/.gitkeep',
                template: '',
            },
        ],
    });
};
