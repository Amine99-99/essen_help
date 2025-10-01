import React from 'react';
import { render, screen, fireEvent ,waitFor} from '@testing-library/react';
import FeedBack from '../app/feed_back/page';

import userEvent from '@testing-library/user-event';





describe('feed back form', ()=>{
    test('testing feed back form', async()=>{
        render(<FeedBack/>)
        const user = userEvent.setup()

        const subject = screen.getByLabelText(/subject/i)
        const first = screen.getByLabelText(/first name/i)
        const last = screen.getByLabelText(/last name/i)
        const email_1 = screen.getByLabelText(/^email$/i)
        const confirm = screen.getByLabelText(/confirm email/i)
        const message = screen.getByLabelText(/message/i)
        const button = screen.getByRole('button',{name:/submit/i})

        await user.selectOptions(subject,'website')
        await user.type(first,'amine')
        await user.type(last,'mans')
        await user.type(email_1,'amm@pack.com')
        await user.type(confirm,'amm@pack.com')
        await user.type(message,'hi this is me')

        await user.click(button)

        expect(subject.value).toBe('website')
        expect(first.value).toBe('amine')
        expect(last.value).toBe('mans')
        expect(email_1.value).toBe('amm@pack.com')
        expect(confirm.value).toBe('amm@pack.com')
        expect(message.value).toBe('hi this is me')
        
    })
})

